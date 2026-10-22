'use client'

import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import ButtonBase from '@mui/material/ButtonBase'
import Stack from '@mui/material/Stack'
import { SxProps, Theme, useTheme } from '@mui/material/styles'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import React from 'react'

type ImageCarouselProps = {
  /** 画像のURL */
  images: string[]
  /** 各スライドの画像に当てるスタイル */
  slideSx?: SxProps<Theme>
}

/** 自動で次の画像へ送るまでの時間 (ミリ秒) */
const AUTOPLAY_DELAY = 3000

/**
 * 自動で切り替わり、スワイプ・ドラッグやドットのクリックでも送れる画像カルーセル
 * 画像が1枚だけのときはそのまま表示する
 * MARK: ImageCarousel
 */
export const ImageCarousel = ({ images, slideSx }: ImageCarouselProps) => {
  const theme = useTheme()
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { direction: theme.direction, loop: true },
    [
      Autoplay({
        delay: AUTOPLAY_DELAY,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  )

  React.useEffect(() => {
    if (!emblaApi) {
      return
    }

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())

    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  if (images.length === 1) {
    return <CardMedia image={images[0]} sx={slideSx} />
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <Box ref={emblaRef} sx={{ overflow: 'hidden' }}>
        <Box sx={{ display: 'flex' }}>
          {images.map((image) => (
            <Box key={image} sx={{ flex: '0 0 100%', minWidth: 0 }}>
              <CardMedia image={image} sx={slideSx} />
            </Box>
          ))}
        </Box>
      </Box>

      <Stack
        direction="row"
        sx={{
          bottom: 4,
          justifyContent: 'center',
          left: 0,
          position: 'absolute',
          right: 0,
        }}
      >
        {images.map((image, index) => (
          <ButtonBase
            aria-current={index === selectedIndex}
            aria-label={`${index + 1} / ${images.length}`}
            key={image}
            onClick={() => emblaApi?.scrollTo(index)}
            sx={{ borderRadius: '50%', p: 0.75 }}
          >
            <Box
              sx={{
                bgcolor: index === selectedIndex ? 'primary.main' : 'action.disabled',
                borderRadius: '50%',
                height: 8,
                width: 8,
              }}
            />
          </ButtonBase>
        ))}
      </Stack>
    </Box>
  )
}
