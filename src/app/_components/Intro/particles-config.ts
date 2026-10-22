import { ISourceOptions } from '@tsparticles/engine'

export const config: ISourceOptions = {
  emitters: {
    position: {
      x: -5,
      y: 55,
    },
    rate: {
      delay: 7,
      quantity: 1,
    },
    size: {
      height: 0,
      width: 0,
    },
  },
  fpsLimit: 120,
  fullScreen: {
    enable: false,
  },
  particles: {
    color: {
      value: '#fff',
    },
    groups: {
      z1000: {
        number: {
          limit: { value: 0 },
          value: 40,
        },
        zIndex: {
          value: 10,
        },
      },
      z2500: {
        number: {
          limit: { value: 0 },
          value: 50,
        },
        zIndex: {
          value: 25,
        },
      },
      z5000: {
        number: {
          limit: { value: 0 },
          value: 70,
        },
        zIndex: {
          value: 50,
        },
      },
      z7500: {
        number: {
          limit: { value: 0 },
          value: 30,
        },
        zIndex: {
          value: 75,
        },
      },
    },
    move: {
      angle: {
        offset: 0,
        value: 10,
      },
      direction: 'top-right',
      enable: true,
      outModes: 'out',
      speed: 1,
    },
    number: {
      density: {
        enable: false,
      },
      value: 200,
    },
    opacity: {
      animation: {
        enable: true,
        speed: 2,
        startValue: 'min',
      },
      value: { max: 1, min: 0 },
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: 3,
    },
    zIndex: {
      opacityRate: 0.5,
      value: 5,
    },
  },
}
