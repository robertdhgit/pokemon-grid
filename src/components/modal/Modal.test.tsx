import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { Modal } from './Modal';

const onClose = vi.fn();

describe('Modal', () => {
  test('does not render when closed', () => {
    render(
      <Modal open={false} onClose={onClose}>
        <div>Content</div>
      </Modal>,
    );

    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });

  test('renders content when open', () => {
    render(
      <Modal open onClose={onClose}>
        <div>Content</div>
      </Modal>,
    );

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  test('calls onClose when overlay is clicked', () => {
    const onClose = vi.fn();

    render(
      <Modal open onClose={onClose}>
        <div>Content</div>
      </Modal>,
    );

    fireEvent.click(screen.getByText('Content').parentElement!.parentElement!);
    expect(onClose).toHaveBeenCalled();
  });
});
