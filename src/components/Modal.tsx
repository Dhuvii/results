import { Dialog, DialogTitleProps } from "@headlessui/react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

interface IModal {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}
const Modal = ({ open, setOpen, children }: IModal) => {
  return (
    <MotionConfig
      transition={{ type: "spring", bounce: 0.3, duration: open ? 0.7 : 0.4 }}
    >
      <AnimatePresence initial={false}>
        {open && (
          <Dialog
            as={motion.div}
            initial="closed"
            animate="open"
            exit="closed"
            static
            className="dark-theme relative z-[999999999999999]"
            open={open}
            onClose={setOpen}
          >
            <motion.div
              variants={{ closed: { opacity: 0 }, open: { opacity: 1 } }}
              className="fixed inset-0 bg-skin-primary/60"
            />

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Dialog.Panel
                  as={motion.div}
                  variants={{
                    closed: {
                      y: "var(--y-closed, 0)",
                      opacity: "var(--opacity-closed)",
                      scale: "var(--scale-closed, 1)",
                    },
                    open: {
                      y: "var(--y-open, 0)",
                      opacity: "var(--opacity-open)",
                      scale: "var(--scale-open, 1)",
                    },
                  }}
                  className="
                        relative overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl [--opacity-closed:0%] [--opacity-open:100%] max-sm:[--y-closed:16px] max-sm:[--y-open:0px]
                        sm:my-8 sm:w-full sm:max-w-lg
                        sm:p-6 sm:[--scale-closed:90%] sm:[--scale-open:100%]
                      "
                >
                  {children}

                  <h3></h3>
                </Dialog.Panel>
              </div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
};

interface IModalTitle extends DialogTitleProps<"h3"> {
  children: React.ReactNode;
}

const ModalTitle = ({ children, ...rest }: IModalTitle) => {
  return (
    <Dialog.Title {...rest} as="h3">
      {children}
    </Dialog.Title>
  );
};

export { Modal, ModalTitle };
