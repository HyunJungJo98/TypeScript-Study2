function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    // 원래 메소드에 접근하기
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            // this : getter
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}

class Printer {
    message = 'This works!';

    // 방법 2. 데코레이터로 getter에 바인딩
    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();

const button = document.querySelector('button')!;
// this를 이벤트 객체로 참조하여 undefined가 출력됨
// 방법 1. 이벤트 객체의 this를 참조하지 않고 p를 참조하여 this를 알아냄
// button.addEventListener('click', p.showMessage.bind(p));
button.addEventListener('click', p.showMessage);
