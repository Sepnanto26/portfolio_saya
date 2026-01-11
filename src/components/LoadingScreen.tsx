import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircleIcon, CheckCircle2Icon, CodeIcon } from 'lucide-react';
interface LoadingScreenProps {
  onComplete: () => void;
}
const codeStages = [{
  code: 'npm install dependencies...',
  progress: 10,
  status: 'loading'
}, {
  code: 'Compiling components...',
  progress: 25,
  status: 'loading'
}, {
  code: 'Building portfolio...',
  progress: 40,
  status: 'loading'
}, {
  code: 'ERROR: Missing dependencies',
  progress: 50,
  status: 'error'
}, {
  code: 'Fixing errors...',
  progress: 60,
  status: 'fixing'
}, {
  code: 'Installing missing packages...',
  progress: 70,
  status: 'fixing'
}, {
  code: 'Resolving conflicts...',
  progress: 80,
  status: 'fixing'
}, {
  code: 'Running tests...',
  progress: 90,
  status: 'loading'
}, {
  code: 'Build successful!',
  progress: 100,
  status: 'success'
}];
const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onComplete
}) => {
  const [currentStage, setCurrentStage] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  useEffect(() => {
    if (currentStage < codeStages.length) {
      const timer = setTimeout(() => {
        setLogs(prev => [...prev, codeStages[currentStage].code]);
        setCurrentStage(currentStage + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      setTimeout(onComplete, 1000);
    }
  }, [currentStage, onComplete]);
  const currentProgress = currentStage < codeStages.length ? codeStages[currentStage].progress : 100;
  const currentStatus = currentStage < codeStages.length ? codeStages[currentStage].status : 'success';
  return <motion.div initial={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} transition={{
    duration: 0.5
  }} className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
      {/* Matrix Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => <motion.div key={i} className="absolute text-green-400 font-mono text-xs opacity-20" style={{
        left: `${i * 5}%`,
        top: -20
      }} animate={{
        y: ['0vh', '110vh']
      }} transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        ease: 'linear',
        delay: Math.random() * 2
      }}>
            {Array.from({
          length: 20
        }, () => Math.random() > 0.5 ? '1' : '0').join('\n')}
          </motion.div>)}
      </div>

      <div className="relative w-full max-w-4xl mx-4">
        {/* Terminal Window */}
        <motion.div initial={{
        y: 20,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} className="bg-gray-950 rounded-lg border border-green-500/30 shadow-2xl shadow-green-500/20 overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-gray-900 px-4 py-3 flex items-center justify-between border-b border-green-500/20">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex items-center gap-2">
                <CodeIcon className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-mono">
                  portfolio-build.sh
                </span>
              </div>
            </div>
            <div className="text-green-400 text-xs font-mono">
              {currentProgress}%
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 min-h-[350px] max-h-[350px] overflow-y-auto font-mono text-sm">
            <AnimatePresence mode="popLayout">
              {logs.map((log, index) => {
              const stage = codeStages[index];
              return <motion.div key={index} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.3
              }} className="mb-2 flex items-start gap-2">
                    {stage.status === 'error' && <AlertCircleIcon className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />}
                    {stage.status === 'success' && <CheckCircle2Icon className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />}
                    {stage.status === 'loading' && <motion.div animate={{
                  rotate: 360
                }} transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'linear'
                }} className="w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full flex-shrink-0 mt-0.5" />}
                    {stage.status === 'fixing' && <motion.div animate={{
                  scale: [1, 1.2, 1]
                }} transition={{
                  duration: 0.5,
                  repeat: Infinity
                }} className="w-4 h-4 flex-shrink-0 mt-0.5">
                        🔧
                      </motion.div>}
                    <span className={`
                      ${stage.status === 'error' ? 'text-red-400' : ''}
                      ${stage.status === 'success' ? 'text-green-400' : ''}
                      ${stage.status === 'loading' ? 'text-blue-400' : ''}
                      ${stage.status === 'fixing' ? 'text-yellow-400' : ''}
                    `}>
                      {log}
                    </span>
                  </motion.div>;
            })}
            </AnimatePresence>

            {currentStage < codeStages.length && <motion.span animate={{
            opacity: [1, 0]
          }} transition={{
            duration: 0.8,
            repeat: Infinity
          }} className="inline-block w-2 h-4 bg-green-400 ml-1" />}
          </div>

          {/* Progress Bar */}
          <div className="px-6 pb-6">
            <div className="bg-gray-900 rounded-full h-3 overflow-hidden border border-green-500/30">
              <motion.div initial={{
              width: 0
            }} animate={{
              width: `${currentProgress}%`
            }} transition={{
              duration: 0.5,
              ease: 'easeOut'
            }} className={`h-full ${currentStatus === 'error' ? 'bg-gradient-to-r from-red-500 to-red-600' : currentStatus === 'fixing' ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 'bg-gradient-to-r from-green-500 to-emerald-400'}`} />
            </div>
            <div className="mt-2 text-center">
              <motion.p key={currentStatus} initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} className="text-green-400 text-sm font-mono">
                {currentStatus === 'error' && '⚠️ Error detected - initiating fix...'}
                {currentStatus === 'fixing' && '🔧 Fixing errors...'}
                {currentStatus === 'loading' && '⚡ Building...'}
                {currentStatus === 'success' && '✨ Build complete! Loading portfolio...'}
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Status Message */}
        {currentProgress === 100 && <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="mt-6 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/10 border border-green-500/30 rounded-lg">
              <CheckCircle2Icon className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-mono text-lg">
                Portfolio deployed successfully!
              </span>
            </div>
          </motion.div>}
      </div>
    </motion.div>;
};
export default LoadingScreen;