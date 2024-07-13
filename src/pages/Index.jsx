import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, Play, Pause, Square, Volume2 } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [tempo, setTempo] = useState(120);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">Music Creator</h1>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-muted p-4 overflow-y-auto">
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full">
              <span>Instruments</span>
              {open => (open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="mt-2 space-y-2">
                <li>Piano</li>
                <li>Drums</li>
                <li>Guitar</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible className="mt-4">
            <CollapsibleTrigger className="flex items-center justify-between w-full">
              <span>Effects</span>
              {open => (open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="mt-2 space-y-2">
                <li>Reverb</li>
                <li>Delay</li>
                <li>EQ</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible className="mt-4">
            <CollapsibleTrigger className="flex items-center justify-between w-full">
              <span>Settings</span>
              {open => (open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="mt-2 space-y-2">
                <p>Instrument Settings</p>
                <p>Effect Settings</p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </aside>

        <main className="flex-1 p-4 flex flex-col">
          <div className="flex-1 border-2 border-dashed border-muted-foreground rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Canvas Area for Arranging Musical Elements</p>
          </div>
          <div className="h-24 mt-4 border-2 border-dashed border-muted-foreground rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Timeline for Sequencing</p>
          </div>
        </main>
      </div>

      <div className="bg-muted p-4 flex items-center space-x-4">
        <Button onClick={togglePlay}>
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button>
          <Square className="h-4 w-4" />
        </Button>
        <div className="flex items-center space-x-2">
          <Volume2 className="h-4 w-4" />
          <Slider
            value={[volume]}
            onValueChange={(newVolume) => setVolume(newVolume[0])}
            max={100}
            step={1}
            className="w-32"
          />
        </div>
        <div className="flex items-center space-x-2">
          <span>Tempo:</span>
          <Slider
            value={[tempo]}
            onValueChange={(newTempo) => setTempo(newTempo[0])}
            min={60}
            max={240}
            step={1}
            className="w-32"
          />
          <span>{tempo} BPM</span>
        </div>
      </div>

      <footer className="bg-muted-foreground text-muted p-4 text-center">
        <p>&copy; 2024 Music Creator. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;