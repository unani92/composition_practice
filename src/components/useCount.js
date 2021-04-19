import {computed, ref} from '@vue/composition-api'

const useCount = () => {
    // data
    const arr = ref([])
    const num = ref(0)

    // computed
    const countAvg = computed(() => {
        const cnt = arr.value.length
        if (!cnt) return 0

        let sum = 0
        arr.value.forEach(n => {
            sum += n
        })
        return Math.round(sum/cnt)
    })

    // methods
    const inputNum = (e) => {
        num.value = Number(e.target.value)
    }
    const submit = () => {
        if (isNaN(num.value)) {
            alert('숫자만 입력 가능합니다')
            num.value = 0
            return
        }
        arr.value.push(Number(num.value))
        num.value = 0
    }
    const clear = () => arr.value = []

    return { arr, num, countAvg, submit, clear, inputNum }
}

export default useCount
