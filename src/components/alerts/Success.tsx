import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { IAlert } from "./AlertContainer";

const Success = ({ id, title, body }: IAlert) => {
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
              rgba(41, 191, 18, 0.25),
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
            rgba(41, 191, 18, 0.25),
            transparent 80%
          )
        `,
        }}
        className="pointer-events-none absolute -inset-px z-20 rounded-2xl transition duration-300 group-hover:opacity-0"
      />
      {/* end of  gradient */}

      <div className="relative z-10 flex w-full">
        <div className="flex flex-1 items-center justify-center gap-3 rounded-l-xl px-3 py-5">
          <svg className="h-8 w-8 text-white" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.236L14.97 8.97a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
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

export default Success;
