export interface Course {
  id: string
  hours: number
  image: string
  level: string
  price: number
  title: string
  author: string
  category: string
  discount: number
  lectures: number
  addToCart: boolean
  categoryID: number
  description: string
  ratingCount: number
  showOnHomepage: boolean
}

export interface CoursesResponse {
  Courses: Course[]
}

export interface Category {
  id: string;
  name: string;
}
export interface CoursesCategoryResponse {
  Categories: Category[]
}