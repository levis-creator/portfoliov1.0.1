import { motion } from "framer-motion";

const Loading = () => {
    return (
        <div className="h-screen w-screen bg-black">

        <motion.div initial={false}
        animate={{
            
        }}>
            Loading

        </motion.div>
        </div>
    );
}

export default Loading;