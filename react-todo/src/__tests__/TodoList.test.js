// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

test('renders initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add todo');
  fireEvent.change(input, { target: { value: 'Write tests' } });
  fireEvent.click(screen.getByText('Add'));
  expect(screen.getByText('Write tests')).toBeInTheDocument();
});

test('toggles todo completion', () => {
  render(<TodoList />);
  const todo = screen.getByText('Learn React');
  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const todo = screen.getByText('Build a Todo App');
  const deleteButton = todo.nextSibling;
  fireEvent.click(deleteButton);
  expect(todo).not.toBeInTheDocument();
});
