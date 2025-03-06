'use client';
import React, { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Import Quill's styles

interface SimpleEditorProps {
  defaultValue?: string; // Accepts a string for initial content
  onChange?: (html: string) => void; // Callback with the updated HTML content
  readOnly?: boolean; // Optional read-only mode
}

const SimpleEditor = forwardRef<Quill | null, SimpleEditorProps>(
  ({ defaultValue = '', onChange, readOnly = false }, ref) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const quillRef = useRef<Quill | null>(null);
    const onChangeRef = useRef(onChange);

    // Update the onChange ref on every render
    useLayoutEffect(() => {
      onChangeRef.current = onChange;
    });

    // Enable/disable the editor based on the `readOnly` prop
    useEffect(() => {
      if (quillRef.current) {
        quillRef.current.enable(!readOnly);
      }
    }, [readOnly]);

    // Initialize Quill and set up event listeners
    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const editorContainer = container.appendChild(
        container.ownerDocument.createElement('div'),
      );

      const quill = new Quill(editorContainer, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }], // Headers
            ['bold', 'italic', 'underline', 'strike'], // Basic formatting
            [{ list: 'ordered' }, { list: 'bullet' }], // Lists
            ['link', 'image'], // Links and images
            ['clean'], // Clear formatting
          ],
        },
      });

      quillRef.current = quill;

      // Expose the Quill instance to the parent via ref
      if (ref) {
        if (typeof ref === 'function') {
          ref(quill);
        } else {
          ref.current = quill;
        }
      }

      // Set initial content if provided
      if (defaultValue) {
        quill.root.innerHTML = defaultValue;
      }

      // Attach event listener for text changes
      const handleTextChange = () => {
        const html = quill.root.innerHTML;
        onChangeRef.current?.(html);
      };

      quill.on(Quill.events.TEXT_CHANGE, handleTextChange);

      // Cleanup on unmount
      return () => {
        if (ref && typeof ref !== 'function') {
          ref.current = null;
        }
        container.innerHTML = '';
      };
    }, [ref]);

    // Update the editor content when defaultValue changes
    useEffect(() => {
      if (quillRef.current && defaultValue !== quillRef.current.root.innerHTML) {
        quillRef.current.root.innerHTML = defaultValue;
      }
    }, [defaultValue]);

    return <div ref={containerRef} className='h-32 mb-16' />;
  },
);

SimpleEditor.displayName = 'SimpleEditor';

export default SimpleEditor;