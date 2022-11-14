export const checkUrl = () => {
  const localUrl = ''
  let baseURL = ''
  const isMock =
        location.host.includes('localhost') ||
        location.host.includes('127.0.0.1')
  if (isMock) {
    baseURL = ''
  }
  return baseURL
}

/**
 * format date
 * @param date create Date
 * @returns string
 */
export const formatDate = (date: Date) => {
  const y = date.getFullYear()
  let MM = date.getMonth() + 1
  MM = MM < 10 ? Number('0' + MM) : MM
  let d = date.getDate()
  d = d < 10 ? Number('0' + d) : d
  let h = date.getHours()
  h = h < 10 ? Number('0' + h) : h
  let m = date.getMinutes()
  m = m < 10 ? Number('0' + m) : m
  let s = date.getSeconds()
  s = s < 10 ? Number('0' + s) : s
  return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s
}

/**
 *
 * @param str string value
 * @returns boolean
 */
export const judgeStrNull = (str: string) => {
  if (str.replace(/\s*/g, '').length == 0) {
    return true
  } else {
    return false
  }
}

/**
 * return tag name
 * @param tag article tag
 * @returns tag name
 */
export const returnTagName = (tag: string) => {
  const options = [
      {
          label: 'JavaScript',
          value: 'js'
      },
      {
          label: '计算机基础',
          value: 'fc'
      },
      {
          label: 'Node',
          value: 'node'
      },
      {
          label: '算法',
          value: 'alg'
      }
  ];
  let tagName = '';
  options.map(el => {
      if (tag === el.value) {
          tagName = el.label;
      }
  });
  return tagName
}
