import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

interface TodoCardProps {
  title: string;
  description: string;
}

const TodoCard: React.FC<TodoCardProps> = ({ title, description }) => {
  return (
    <Card className="max-w-md mx-auto mt-10 shadow-lg">
      <CardHeader className="bg-blue-500 text-white p-4">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <CardDescription className="text-gray-700">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default TodoCard;
