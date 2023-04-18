function parseCount(meaning) {
  const pars = Number.parseFloat(meaning);
  if (Number.isNaN(pars)) {
    throw new Error("Невалидное значение");
  }
  return pars;
}

function validateCount(meaningNew) {
  try {
    return parseCount(meaningNew);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(left, right, down) {
    this.left = left;
    this.right = right;
    this.down = down;
    if (left + right < down || left + down < right || right + down < left) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  get perimeter() {
    return this.left + this.right + this.down;
  }

  get area() {
    let per = this.perimeter / 2;
    return +Math.sqrt(
      per * (per - this.left) * (per - this.right) * (per - this.down)
    ).toFixed(3);
  }
}

function getTriangle(left, right, down) {
  try {
    return new Triangle(left, right, down);
  } catch {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
