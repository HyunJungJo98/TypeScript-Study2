// Drag & Drop Interfaces
namespace App {
  export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
  }

  export interface DragTarget {
    // 브라우저와 자바스크립트에 드래그가 유효한 타겟임을 알려줌
    dragOverHandler(event: DragEvent): void;
    // 실제 일어나는 드롭 핸들링
    dropHandler(event: DragEvent): void;
    // 취소 or 해당 요소 삭제
    dragLeaveHandler(event: DragEvent): void;
  }
}
