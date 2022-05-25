// enum ProjectStatus {
//   Active,
//   Finished,
// }

// class Project {
//   constructor(
//     public id: string,
//     public title: string,
//     public description: string,
//     public people: number,
//     public status: ProjectStatus
//   ) {}
// }

// // 반환하는 값 상관 x
// type Listener<T> = (items: T[]) => void;

// class State<T> {
//   protected listeners: Listener<T>[] = [];

//   // Function 대신 Listener로 바꿔줌
//   addListener(listenerFn: Listener<T>) {
//     this.listeners.push(listenerFn);
//   }
// }

// // state 관리
// class ProjectState extends State<Project> {
//   private projects: Project[] = [];
//   private static instance: ProjectState;

//   private constructor() {
//     super();
//   }

//   static getInstance() {
//     if (this.instance) {
//       return this.instance;
//     } else {
//       this.instance = new ProjectState();
//       return this.instance;
//     }
//   }

//   // line 246
//   addProject(title: string, description: string, numOfPeople: number) {
//     // const newProject = {
//     //   id: Math.random().toString(),
//     //   title: title,
//     //   description: description,
//     //   people: numOfPeople,
//     // };
//     const newProject = new Project(
//       Math.random().toString(),
//       title,
//       description,
//       numOfPeople,
//       ProjectStatus.Active
//     );
//     this.projects.push(newProject);
//     // 새 프로젝트를 추가할 때마다 리스너 함수들 실행
//     for (const listenerFn of this.listeners) {
//       // 복사 배열 전달
//       listenerFn(this.projects.slice());
//     }
//   }
// }

// // 싱글턴 객체
// const projectState = ProjectState.getInstance();

// // autobind decorator
// const autobind = (_: any, _2: string, descriptor: PropertyDescriptor) => {
//   const originalMethod = descriptor.value;
//   const adjDescriptor: PropertyDescriptor = {
//     configurable: true,
//     get() {
//       const boundFn = originalMethod.bind(this);
//       return boundFn;
//     },
//   };
//   return adjDescriptor;
// };

// // validation
// interface Validatable {
//   value: string | number;
//   required?: boolean;
//   minLength?: number;
//   maxLength?: number;
//   min?: number;
//   max?: number;
// }

// const validate = (validatableInput: Validatable) => {
//   let isValid = true;
//   // required의 값이 있으면
//   if (validatableInput.required) {
//     // value의 길이가 0이면 false로 바뀜
//     isValid = isValid && validatableInput.value.toString().trim().length !== 0;
//   }
//   if (
//     // != null : null, undefined가 아니면
//     validatableInput.minLength != null &&
//     typeof validatableInput.value === 'string'
//   ) {
//     isValid =
//       isValid && validatableInput.value.length > validatableInput.minLength;
//   }
//   if (
//     validatableInput.maxLength != null &&
//     typeof validatableInput.value === 'string'
//   ) {
//     isValid =
//       isValid && validatableInput.value.length < validatableInput.maxLength;
//   }
//   if (
//     validatableInput.min != null &&
//     typeof validatableInput.value === 'number'
//   ) {
//     isValid = isValid && validatableInput.value > validatableInput.min;
//   }
//   if (
//     validatableInput.max != null &&
//     typeof validatableInput.value === 'number'
//   ) {
//     isValid = isValid && validatableInput.value < validatableInput.max;
//   }
//   return isValid;
// };

// abstract class Component<T extends HTMLElement, U extends HTMLElement> {
//   templateElement: HTMLTemplateElement;
//   hostElement: T;
//   element: U;

//   constructor(
//     templatedId: string,
//     hostElementId: string,
//     insertAtStart: boolean,
//     newElementId?: string
//   ) {
//     this.templateElement = document.getElementById(
//       templatedId
//     )! as HTMLTemplateElement;
//     this.hostElement = document.getElementById(hostElementId)! as T;

//     // true : 깊은 복사로 템플릿 내부에 있는 모든 수준으로 가져올 것인지
//     const importedNode = document.importNode(
//       this.templateElement.content,
//       true
//     );
//     this.element = importedNode.firstElementChild as U;
//     if (newElementId) {
//       this.element.id = newElementId;
//     }

//     // 렌더링 하기
//     this.attach(insertAtStart);
//   }

//   private attach(insertAtStart: boolean) {
//     // 종료 태그 앞에
//     this.hostElement.insertAdjacentElement(
//       insertAtStart ? 'afterbegin' : 'beforeend',
//       this.element
//     );
//   }

//   abstract configure(): void;
//   abstract renderContent(): void;
// }

// class ProjectList extends Component<HTMLDivElement, HTMLElement> {
//   assignedProjects: Project[];

//   constructor(private type: 'active' | 'finished') {
//     super('project-list', 'app', false, `${type}-projects`);
//     this.assignedProjects = [];

//     this.configure();
//     this.renderContent();
//   }

//   private renderProjects() {
//     const listEl = document.getElementById(
//       `${this.type}-projects-list`
//     ) as HTMLUListElement;
//     listEl.innerHTML = '';
//     for (const project of this.assignedProjects) {
//       const listItem = document.createElement('li');
//       listItem.textContent = project.title;
//       listEl.appendChild(listItem);
//     }
//   }

//   configure(): void {
//     // state에 리스너 함수 추가
//     projectState.addListener((projects: Project[]) => {
//       const relevantProjects = projects.filter((prj) => {
//         if (this.type === 'active') {
//           return prj.status === ProjectStatus.Active;
//         }
//         return prj.status === ProjectStatus.Finished;
//       });
//       this.assignedProjects = relevantProjects;
//       this.renderProjects();
//     });
//   }

//   renderContent() {
//     const listId = `${this.type}-projects-list`;
//     this.element.querySelector('ul')!.id = listId;
//     this.element.querySelector('h2')!.innerHTML =
//       this.type.toLocaleUpperCase() + ' PROJECTS';
//   }
// }

// class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
//   titleInputElement: HTMLInputElement;
//   descriptionInputElement: HTMLInputElement;
//   peopleInputElement: HTMLInputElement;

//   constructor() {
//     super('project-input', 'app', true, 'user-id');

//     this.titleInputElement = this.element.querySelector('#title')!;
//     this.descriptionInputElement = this.element.querySelector('#description')!;
//     this.peopleInputElement = this.element.querySelector('#people')!;

//     // 이벤트리스너 붙이기
//     this.configure();
//   }

//   configure() {
//     this.element.addEventListener('submit', this.submitHandler.bind(this));
//   }

//   renderContent(): void {}

//   private gatherUserInput(): [string, string, number] | void {
//     const enteredTitle = this.titleInputElement.value;
//     const enteredDescription = this.descriptionInputElement.value;
//     const enteredPeople = this.peopleInputElement.value;

//     const titleValidatable: Validatable = {
//       value: enteredTitle,
//       required: true,
//     };
//     const descriptionValidatable: Validatable = {
//       value: enteredDescription,
//       required: true,
//       minLength: 5,
//     };
//     const peopleValidatable: Validatable = {
//       value: +enteredPeople,
//       required: true,
//       min: 1,
//       max: 5,
//     };

//     // 유효성 검사하는 함수 만들기
//     if (
//       !validate(titleValidatable) ||
//       !validate(descriptionValidatable) ||
//       !validate(peopleValidatable)
//     ) {
//       // if (
//       //   enteredTitle.trim().length === 0 ||
//       //   enteredDescription.trim().length === 0 ||
//       //   enteredPeople.trim().length === 0
//       // ) {
//       // 잉여 여백 제거한 것 길이가 0
//       alert('please try again!');
//     } else {
//       return [enteredTitle, enteredDescription, +enteredPeople];
//     }
//   }

//   private clearInput() {
//     this.titleInputElement.value = '';
//     this.descriptionInputElement.value = '';
//     this.peopleInputElement.value = '';
//   }

//   // @autobind
//   private submitHandler(e: Event) {
//     e.preventDefault();
//     // this가 클래스를 가르키지 않음, 이벤트 대상에 바인딩 됨 -> line42 : this
//     // or line48 decorator
//     console.log(this.titleInputElement.value);
//     const userInput = this.gatherUserInput();
//     if (Array.isArray(userInput)) {
//       const [title, desc, people] = userInput;
//       // state에 project 추가
//       projectState.addProject(title, desc, people);
//       this.clearInput();
//     }
//   }
// }

// const prjInput = new ProjectInput();
// const activePrjList = new ProjectList('active');
// const finishedPrjList = new ProjectList('finished');
