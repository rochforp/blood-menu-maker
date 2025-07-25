import React, { useCallback, useState } from 'react';
import { Upload, FileText, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UploadZoneProps {
  onFileUpload: (file: File) => void;
  className?: string;
}

export const UploadZone: React.FC<UploadZoneProps> = ({ onFileUpload, className }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      setUploadedFile(file);
      onFileUpload(file);
    }
  }, [onFileUpload]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setUploadedFile(file);
      onFileUpload(file);
    }
  }, [onFileUpload]);

  return (
    <div
      className={cn(
        "relative border-2 border-dashed rounded-lg p-8 text-center transition-smooth",
        isDragOver
          ? "border-primary bg-accent-light"
          : "border-border bg-gradient-subtle hover:border-primary/50",
        className
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="space-y-4">
        {uploadedFile ? (
          <div className="flex items-center justify-center space-x-3 text-accent">
            <FileText className="h-8 w-8" />
            <div>
              <p className="font-semibold">{uploadedFile.name}</p>
              <p className="text-sm text-muted-foreground">
                {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
        ) : (
          <Upload className="h-12 w-12 mx-auto text-muted-foreground" />
        )}
        
        <div>
          <h3 className="text-lg font-semibold mb-2">
            {uploadedFile ? 'File Uploaded Successfully' : 'Upload Blood Test Results'}
          </h3>
          <p className="text-muted-foreground mb-4">
            Drag and drop your blood test file here, or click to browse
          </p>
          
          <input
            type="file"
            id="file-upload"
            className="hidden"
            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
            onChange={handleFileSelect}
          />
          
          <label
            htmlFor="file-upload"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-md font-medium cursor-pointer hover:shadow-medium transform hover:scale-[1.02] transition-smooth"
          >
            <Upload className="h-4 w-4" />
            Choose File
          </label>
        </div>
        
        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
          <AlertCircle className="h-4 w-4" />
          <span>Supported formats: PDF, JPG, PNG, DOC, DOCX</span>
        </div>
      </div>
    </div>
  );
};