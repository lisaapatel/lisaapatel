import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { cn } from "../../lib/utils";

interface ProjectSectionProps {
  title: string;
  subtitle?: string | React.ReactNode;
  children: React.ReactNode;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({
  title,
  subtitle,
  children
}) => {
  return (
    <section className="py-16 first:pt-8 last:pb-8">
      <div className="container max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-4 tracking-tight text-gradient">
          {title}
        </h2>
        {subtitle && (
          <h3 className="text-xl text-center mb-12 text-muted-foreground font-light">
            {subtitle}
          </h3>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {children}
        </div>
      </div>
    </section>
  );
}; 