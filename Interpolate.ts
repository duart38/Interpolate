import Observe from "https://raw.githubusercontent.com/duart38/Observe/master/Observe.ts";
export default class Interpolation extends Observe<string>{
    prefix: string = "\{\{";
    suffix: string = "\}\}";
    compiled: string = "";
    constructor(string: string, values?: Map<string, string>) {
        super(string)
        values?.forEach((val, key)=>this.fill(key, val));
    }
    private regexConstruct(valueName: string): RegExp{
        return new RegExp(this.prefix + valueName + this.suffix);
    }
    public fill(key: string, value: string){
        let replaced = this.getValue().replace(this.regexConstruct(key), value);
        this.setValue(replaced);
        return replaced
    }
    public fillAll(values: Map<string, string>){
        values.forEach((val, key)=>this.fill(key, val));
    }
}
