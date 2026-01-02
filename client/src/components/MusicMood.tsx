import { useState, useRef, useEffect } from "react";
import { Music, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { motion, AnimatePresence } from "framer-motion";

const moods = [
  {
    name: "Focus",
    description: "Deep work vibes",
    url: "https://www.youtube.com/embed/jF1OQksilO8?si=oCt-HhLT1xYaH0n1",
  },
  {
    name: "Calm",
    description: "Relaxation mode",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=qT8q9zEQ9zEQ9zEQ",
  },
  {
    name: "Creative",
    description: "Inspiration mode",
    url: "https://www.youtube.com/embed/9bZkp7q19f0?si=9zEQ9zEQ9zEQ9zEQ",
  },
];

export function MusicMood() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeMood, setActiveMood] = useState<(typeof moods)[number] | null>(
    null
  );
  const [volume, setVolume] = useState(30);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const handleMoodSelect = (mood: (typeof moods)[number]) => {
    setActiveMood(mood);
    setIsPlaying(true);
    // In a real app, you'd load the audio here
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setActiveMood(null);
    setIsPlaying(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative hover:bg-primary/10 hover:text-primary transition-colors"
          title="Music mood"
        >
          <Music size={20} />
          {isPlaying && activeMood && (
            <motion.div
              className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 bg-card border-border/80 shadow-lg">
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Music Moods</h3>
            <p className="text-xs text-muted-foreground">
              Click-to-play ambient sounds for focus
            </p>
          </div>

          {/* Mood buttons */}
          <div className="grid grid-cols-3 gap-2">
            {moods.map((mood) => (
              <motion.button
                key={mood.name}
                onClick={() => handleMoodSelect(mood)}
                className={`relative p-3 rounded-lg transition-all duration-200 ${
                  activeMood?.name === mood.name
                    ? "bg-primary/20 border border-primary/40 text-primary"
                    : "bg-secondary/50 border border-border/50 text-muted-foreground hover:bg-secondary/70 hover:border-primary/30"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-center space-y-1">
                  <Music size={16} className="mx-auto" />
                  <div className="text-xs font-medium">{mood.name}</div>
                </div>
                {activeMood?.name === mood.name && (
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-primary/5"
                    layoutId="activeIndicator"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Current mood info */}
          <AnimatePresence>
            {activeMood && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-primary/5 border border-primary/20 rounded-lg p-3"
              >
                <p className="text-sm font-medium text-foreground">
                  {activeMood.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {activeMood.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Controls */}
          <div className="space-y-3 pt-2 border-t border-border/50">
            {activeMood && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 px-1">
                  <Volume2 size={14} className="text-muted-foreground" />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="flex-1 h-1.5 bg-secondary/50 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <span className="text-xs text-muted-foreground w-6">
                    {volume}%
                  </span>
                </div>

                <div className="flex gap-2">
                  <motion.button
                    onClick={togglePlayPause}
                    className="flex-1 py-2 px-3 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isPlaying ? (
                      <>
                        <Pause size={14} /> Pause
                      </>
                    ) : (
                      <>
                        <Play size={14} /> Play
                      </>
                    )}
                  </motion.button>
                  <motion.button
                    onClick={handleStop}
                    className="flex-1 py-2 px-3 rounded-lg bg-muted/50 border border-border/50 text-muted-foreground hover:bg-muted/70 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <VolumeX size={14} /> Stop
                  </motion.button>
                </div>
              </div>
            )}

            {!activeMood && (
              <p className="text-xs text-muted-foreground text-center py-2">
                Select a mood to get started
              </p>
            )}
          </div>
        </div>
      </PopoverContent>

      {/* Hidden audio element */}
      <audio ref={audioRef} crossOrigin="anonymous" />
    </Popover>
  );
}
