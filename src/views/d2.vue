<script lang="tsx">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component

export default class D2 extends Vue {
  private name: string = '';
  private msg: string = '暂无';

  get nameLen() {
    return this.name.length;
  }

  @Watch('name')
  protected watchName(news: any, old: any) {
    this.msg = `监听到属性name发生变化，新的值为：${news}`;
  }

  protected render() {
    return (
      <div>
        <el-input v-model={this.name} placeholder='请输入姓名'></el-input>
        <el-button type='primary' onClick={ this.submit }>点击提交</el-button>
        <div>{ this.msg }</div>
        <div>my name is { this.name }</div>
        <div>name length is { this.nameLen }</div>
      </div>
    );
  }

  protected submit(): void {
    // tslint:disable-next-line:no-console
    this.$axios.post('/api/add').then((res) => console.log);
  }
}
</script>

<style lang="scss" scoped>

</style>
