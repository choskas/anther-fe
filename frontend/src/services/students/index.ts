export const getAllStudents = async () => {
    try {
        const res = await fetch('/api/students')
        const data = await res.json()
        return data.students
    } catch (error) {
        return error
    }
}