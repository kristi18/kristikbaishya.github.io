// Using 'any' to avoid version type conflicts
export const particlesConfig: any = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: ["#3B82F6", "#8B5CF6", "#10B981"]
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5,
      random: true,
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.1,
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 0.1,
        sync: false
      }
    },
    links: {
      enable: true,
      distance: 150,
      color: "#3B82F6",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      outModes: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,
        mode: "bubble"
      },
      onClick: {
        enable: false
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 150,
        size: 6,
        duration: 2,
        opacity: 0.8,
        speed: 3
      }
    }
  },
  detectRetina: true,
  background: {
    color: "transparent",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover"
  }
};
