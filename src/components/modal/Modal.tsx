import type { ReactNode } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return createPortal(
    <Overlay onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>{children}</Content>
    </Overlay>,
    document.body,
  );
}

// ------------- styled components -------------

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const Content = styled.div`
  width: 400px;
  max-height: 80vh;
  background: #1f1f1f;
  padding: 24px;
  border-radius: 12px;
  overflow-y: auto;
  color: white;
`;
