import productData from './product.json'

const diaries = productData

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getEntries = () => diaries

// export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
//   const entry = diaries.find(d => d.id === id)
//   if (entry != null) {
//     const { comment, ...resOfDiary } = entry
//     return resOfDiary
//   }

//   return undefined
// }

// export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
//   return diaries.map(({ id, weather, date, visibility }) => {
//     return {
//       id,
//       date,
//       visibility,
//       weather
//     }
//   })
// }

// export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
//   const newDiary = {
//     id: Math.max(...diaries.map(d => d.id)) + 1,
//     ...newDiaryEntry
//   }

//   diaries.push(newDiary)
//   return newDiary
// }
