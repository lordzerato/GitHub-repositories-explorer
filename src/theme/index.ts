import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const theme = defineConfig({
  theme: {
    tokens: {
      colors: {
        'bg.purple': {
          950: { value: '#2C0051' },
          900: { value: '#3C006A' },
          800: { value: '#4C0085' },
          700: { value: '#5D00A1' },
          600: { value: '#6F00BD' },
          500: { value: '#9300f9' },
          400: { value: '#B76EFF' },
          300: { value: '#C88FFF' },
          200: { value: '#D8AFFF' },
          100: { value: '#E9CEFF' },
          50: { value: '#FAECFF' }
        }
      }
    },
    semanticTokens: {
      colors: {
        'bg.body': {
          value: {
            _light: '{colors.bg.purple.50}',
            _dark: '{colors.bg.purple.950}'
          }
        },
        'bg.header': {
          value: {
            _light: '{colors.bg.purple.200}',
            _dark: '{colors.bg.purple.800}'
          }
        },
        'bg.icon': {
          value: {
            _light: '#A646FF',
            _dark: '#8100DB'
          }
        },
        'bg.text': {
          value: {
            _light: 'colors.bg.purple.900',
            _dark: 'colors.bg.purple.100'
          }
        },
        'bg.frame': {
          value: {
            _light: '{colors.bg.purple.100}',
            _dark: '{colors.bg.purple.900}'
          }
        },
        'bg.border': {},
        'bg.palette': {
          solid: {
            value: {
              _light: '{colors.bg.purple.500}',
              _dark: '{colors.bg.purple.500}'
            }
          },
          contrast: {
            value: {
              _light: '{colors.bg.purple.100}',
              _dark: '{colors.bg.purple.900}'
            }
          },
          fg: {
            value: {
              _light: '{colors.bg.purple.700}',
              _dark: '{colors.bg.purple.300}'
            }
          },
          muted: {
            value: {
              _light: '{colors.bg.purple.300}',
              _dark: '{colors.bg.purple.700}'
            }
          },
          subtle: {
            value: {
              _light: '{colors.bg.purple.200}',
              _dark: '{colors.bg.purple.800}'
            }
          },
          emphasized: {
            value: {
              _light: '{colors.bg.purple.300}',
              _dark: '{colors.bg.purple.700}'
            }
          },
          focusRing: {
            value: {
              _light: '{colors.bg.purple.500}',
              _dark: '{colors.bg.purple.500}'
            }
          }
        }
      }
    },
    breakpoints: {
      '3xl': '2000px'
    }
  },
  globalCss: {
    heading: {
      fontFamily: `'Poppins', sans-serif`
    },
    body: {
      backgroundColor: 'bg.body',
      margin: 0,
      display: 'flex',
      minWidth: '320px',
      minHeight: '100vh',
      fontFamily: `'Poppins', sans-serif`
    }
  }
})

export default createSystem(defaultConfig, theme)
