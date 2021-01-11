<script lang='jsx'>
import { defineComponent, getCurrentInstance } from 'vue'
const ActivityEntry = defineComponent({
  setup () {
    const { ctx } = getCurrentInstance()
    ctx.$toast('测试')
    return () => {}
  }
})
export default ActivityEntry
</script>
