import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

interface Imodal {
  isOpen: boolean;
  closeModal: () => void;
  title?: string;
  children: React.ReactNode;
}
const Modal = ({ isOpen, closeModal, title, children }: Imodal) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={closeModal}
        transition
        className=" inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0 fixed   "
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-sm -z-10" />

        <DialogPanel className="max-w-lg space-y-4 bg-white p-3 w-full rounded-md">
          {title && <DialogTitle className="font-bold">{title}</DialogTitle>}

          <div className="flex gap-4 flex-col w-100">{children}</div>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default Modal;
