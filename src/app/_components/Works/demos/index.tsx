import { DemoStage } from './DemoStage'
import { HatsuneMiku } from './HatsuneMiku'
import { TextAnimation } from './TextAnimation'
import { TextAnimation2 } from './TextAnimation2'

/** 制作物のデモ (works.jsonのdemoで指定する) */
const demos: Record<string, React.ReactNode> = {
  'hatsune-miku': (
    <DemoStage background="#fff" stylesheet="/works/demos/hatsune-miku.css">
      <HatsuneMiku />
    </DemoStage>
  ),
  'text-animation': (
    <DemoStage background="#222" replayable stylesheet="/works/demos/text-animation.css">
      <TextAnimation />
    </DemoStage>
  ),
  'text-animation-2': (
    <DemoStage background="#e2e2e2" replayable stylesheet="/works/demos/text-animation-2.css">
      <TextAnimation2 />
    </DemoStage>
  ),
}

/**
 * 制作物のデモを描画する
 * MARK: Demo
 */
export function Demo({ id }: { id: string }) {
  return demos[id] ?? null
}
