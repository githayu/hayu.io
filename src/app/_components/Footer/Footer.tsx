import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

/**
 * ページのフッター (コピーライト)
 * MARK: Footer
 */
export function Footer() {
  return (
    <Typography
      component="footer"
      sx={{ color: 'text.secondary', py: 2, textAlign: 'center' }}
      variant="body2"
    >
      © 2012-{new Date().getFullYear()}{' '}
      <Link color="inherit" href="https://mikumo.io/" underline="hover">
        mikumo.io
      </Link>
    </Typography>
  )
}
