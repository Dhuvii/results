import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import { IAlert } from "./AlertContainer";

const Error = ({ id, title, body }: IAlert) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    let { left, top } = currentTarget?.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      key={id}
      onMouseMove={handleMouseMove}
      className="group relative h-full w-full rounded-2xl border border-white/10 bg-skin-primary bg-gradient-to-r p-3"
    >
      {/* gradient */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-20 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(242, 27, 63, 0.25),
              transparent 80%
            )
          `,
        }}
      />

      <div
        style={{
          background: `
          radial-gradient(
            250px circle at 50px 20px,
            rgba(242, 27, 63, 0.25),
            transparent 80%
          )
        `,
        }}
        className="pointer-events-none absolute -inset-px z-20 rounded-2xl transition duration-300 group-hover:opacity-0"
      />
      {/* end of  gradient */}

      <div className="relative z-10 flex w-full">
        <div className="flex flex-1 items-center justify-center gap-3 rounded-l-xl px-3 py-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2c-.811 0-1.595.268-3.162.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082ZM15.059 10.5a.75.75 0 0 0-1.118-.999l-3.012 3.374l-.87-.974a.75.75 0 0 0-1.118 1l1.428 1.6a.75.75 0 0 0 1.119 0l3.572-4Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div className="h-full w-full select-none p-3">
          <h1 className="text-xl font-medium text-white">{title}</h1>
          <p className="mt-2 text-xs leading-5 text-gray-200">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
