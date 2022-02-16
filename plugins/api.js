import AES256 from 'aes-everywhere'

export default function ({ $axios, $config: { encryption }, $store }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    transformRequest: [
      (data) => {
        const encryptedData = encryption
          ? AES256.encrypt(data, 'PASSWORD')
          : data
        return encryptedData
      },
      ...$axios.defaults.transformRequest,
    ],
  })
  // Inject to context as $api
  inject('api', api)
}
