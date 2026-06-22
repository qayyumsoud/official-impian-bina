// src/components/ui/image-gallery.tsx
import React, { useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// The exact data structure your portfolio items must follow
export interface ProjectGalleryItem {
  id: string;
  src: string;
  alt: string;
  ratio: number; // e.g., 16/9, 4/3, or 9/16 for portraits
  title: string;
  category: string;
}

interface ImageGalleryProps {
  items: ProjectGalleryItem[];
}

export function ImageGallery({ items }: ImageGalleryProps) {
  // Split items into 3 columns for desktop, 2 for tablet, 1 for mobile
  // This logic ensures a true masonry layout without CSS columns bugs
  const columns = [[], [], []] as ProjectGalleryItem[][];
  items.forEach((item, index) => {
    columns[index % 3].push(item);
  });

  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-6">
      <div className="grid w-full max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {columns.map((colItems, colIndex) => (
          <div key={`col-${colIndex}`} className="flex flex-col gap-6">
            {colItems.map((item) => (
              <AnimatedProjectCard key={item.id} item={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function AnimatedProjectCard({ item }: { item: ProjectGalleryItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <div 
      ref={ref} 
      className={`group relative overflow-hidden bg-accent transition-all duration-1000 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <AspectRatio ratio={item.ratio} className="w-full">
        <img
          alt={item.alt}
          src={item.src}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </AspectRatio>
    </div>
  );
}