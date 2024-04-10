class Component {
    _data = { name: ''}
    pending = false
    constructor(){
        this.data = new Proxy(this._data,{
            set: (target, key, value)=>{
                this._data[key] = value
                // this.render()
                if (this.pending === false) {
                    this.pending = true
                    Promise.resolve().then(()=>{
                        this.render()
                    })
                }
            }
        })
    }
    render(){
        this.pending = false
        console.log(`render - ${this._data.name}`);
    }
}
const com = new Component()
com.data.name = 'a'
com.data.name = 'b'
com.data.name = 'cccc'
// 触发一次render

setTimeout(() => {
    com.data.name = '大帅哥'
});
// 第二次触发render