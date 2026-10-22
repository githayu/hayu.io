import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { ImageCarousel } from '@/components/ImageCarousel'

import { Demo } from './demos'
import data from './works.json'

type Work = (typeof data.works)[number]

/** 制作物の状態ごとのラベル・並び順 */
const statuses: Record<string, { label?: string; order: number }> = {
  active: { order: 0 },
  closed: { label: '提供終了', order: 2 },
  discontinued: { label: '開発終了', order: 1 },
}

/**
 * 制作物のカード
 * 外部サイトは新しいタブで開き、リンク先がなければリンクにしない
 * 画像のカルーセルやデモはリンクの外に置き、操作できるようにする
 * MARK: WorkCard
 */
const WorkCard = ({ work }: { work: Work }) => {
  const isClosed = work.status === 'closed'
  const statusLabel = statuses[work.status]?.label

  const content = (
    <CardContent>
      <Stack
        direction="row"
        spacing={1}
        sx={{ alignItems: 'center', mb: 1 }}
      >
        <Typography component="h4" variant="subtitle1">
          {work.name}
        </Typography>

        {statusLabel && <Chip label={statusLabel} size="small" />}
      </Stack>

      <Typography sx={{ color: 'text.secondary' }} variant="body2">
        {work.description}
      </Typography>
    </CardContent>
  )

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        opacity: isClosed ? 0.6 : 1,
      }}
      variant="outlined"
    >
      {work.demo && <Demo id={work.demo} />}

      {work.images && (
        <ImageCarousel
          images={work.images}
          slideSx={{ aspectRatio: '16 / 9', backgroundPosition: 'top' }}
        />
      )}

      {work.href ? (
        <CardActionArea
          draggable={false}
          href={work.href}
          rel="noopener noreferrer"
          sx={{ flex: 1 }}
          target="_blank"
        >
          {content}
        </CardActionArea>
      ) : (
        content
      )}
    </Card>
  )
}

/**
 * 制作物の一覧
 * MARK: Works
 */
export function Works() {
  return (
    <Box component="section" id="works">
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography component="h2" sx={{ mb: 3 }} variant="h5">
          Works
        </Typography>

        <Stack spacing={4}>
          {data.categories.map((category) => (
            <section key={category.id}>
              <Typography component="h3" sx={{ mb: 2 }} variant="h6">
                {category.label}
              </Typography>

              <Grid container spacing={2}>
                {data.works
                  .filter((work) => work.category === category.id)
                  .toSorted(
                    (a, b) => statuses[a.status].order - statuses[b.status].order
                  )
                  .map((work) => (
                    <Grid key={work.id} size={{ sm: 6, xs: 12 }}>
                      <WorkCard work={work} />
                    </Grid>
                  ))}
              </Grid>
            </section>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
