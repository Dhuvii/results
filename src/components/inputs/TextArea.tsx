import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { ComponentProps, forwardRef, useEffect, useId } from "react";

interface ITextArea extends ComponentProps<"textarea"> {
  error?: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  TopRightContainer?: React.FC<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  >;
}
const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
  ({ error, placeholder, Icon, required, TopRightContainer, ...rest }, ref) => {
    const id = useId();
    const inputAnimation = useAnimationControls();
    const errorText = useAnimationControls();
    useEffect(() => {
      if (error) {
        inputAnimation.start({
          x: [-2, 0, 2, 0, -2],
          transition: { repeat: 5, duration: 0.15 },
        });

        errorText.start({
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5 },
        });
      }
    }, [error]);
    return (
      <div className="relative flex flex-col justify-start">
        <motion.div
          animate={inputAnimation}
          initial={{ x: 0 }}
          className="relative"
        >
          {/* top right container */}
          {TopRightContainer && (
            <div className="absolute -top-[30%] right-2 z-10">
              <TopRightContainer />
            </div>
          )}
          {/* end of top right container */}

          <textarea
            id={id}
            ref={ref}
            className={`peer block w-full resize-y appearance-none overflow-hidden rounded-xl border-2 bg-transparent p-3 text-sm text-gray-900 transition duration-300 focus:outline-none focus:ring-2 
          ${
            error
              ? "border-red-500 focus:border-transparent focus:ring-red-600"
              : "border-gray-300 focus:border-transparent focus:ring-blue-600"
          }
          `}
            placeholder={" "}
            {...rest}
          />

          <motion.label
            htmlFor={id}
            className={`absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm  duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:px-2 
            ${
              error
                ? "text-red-600 peer-focus:text-red-600"
                : "text-gray-500 peer-focus:text-blue-600"
            }
            `}
          >
            <div className="flex items-center justify-start gap-2">
              <AnimatePresence>
                {error && (
                  <motion.div
                    layoutId={`error_icon_${id}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={errorText}
                    exit={{ opacity: 0, scale: 0 }}
                    className="rounded-full"
                  >
                    <svg className="h-5 w-5 text-red-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991v-1.574Zm9-3.167a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75ZM12 16a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                )}

                {!error && Icon && (
                  <motion.div layoutId={`custom_icon_${id}`}>
                    <Icon />
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.span layoutId={`label_${id}`}>
                {placeholder}
                {required && (
                  <span>
                    <sup className="text-sm">*</sup>
                  </span>
                )}
              </motion.span>
            </div>
          </motion.label>
        </motion.div>

        {/* error text */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={errorText}
              className="absolute inset-x-0 -bottom-5"
            >
              <p className="w-full text-left text-xs text-red-600">{error}</p>
            </motion.div>
          )}
        </AnimatePresence>
        {/* end of error text */}
      </div>
    );
  },
);

export default TextArea;
