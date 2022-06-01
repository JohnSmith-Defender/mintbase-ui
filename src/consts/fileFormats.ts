export const AUDIO_TYPES = ['audio/ogg', 'audio/mp3']
export const VIDEO_TYPES = ['video/webm', 'video/mp4', 'video/mpeg']
export const IMAGE_TYPES = [
  'image/png',
  'image/jpeg',
  'image/gif',
  'image/svg+xml',
]
export const THREED_TYPES = [
  'model/gltf-binary',
  'model/gltf+json',
  'application/octet-stream',
  'glb'
]
export const FILE_TYPES = ['application/pdf']

export const ALL_TYPES = [
  ...IMAGE_TYPES,
  ...AUDIO_TYPES,
  ...VIDEO_TYPES,
  ...THREED_TYPES,
]
