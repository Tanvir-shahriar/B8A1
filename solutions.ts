function multiplyValue(value: number, multiplier?: number): number {
  if (typeof multiplier === "number") {
    return value * multiplier;
  }
  return value * 2;
}


function processInput(
  input: string | number | boolean
): string | number | boolean {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  }
  if (typeof input === "number") {
    return input * 10;
  }
  if (input === true) {
    return "Active";
  }
  return "Inactive";
}

function formatCoordinate(coordinate: readonly [number, number, string]): string {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

type ConcatenateArraysType = <T>(...arrays: T[][]) => T[];

const concatenateArrays: ConcatenateArraysType = <T>(...arrays: T[][]): T[] => {
  const result: T[] = [];

  for (const list of arrays) {
    for (const item of list) {
      result.push(item);
    }
  }

  return result;
};


interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  const popular: Course[] = [];
  for (let course of courses) {
    if (course.isPublished === true && course.students >= minStudents) {
      popular.push(course);
    }
  }
  return popular;
}

type PluckValuesType = <T, K extends keyof T>(items: T[], key: K) => T[K][];

const pluckValues: PluckValuesType = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  let values: T[K][] = [];
  for (let i = 0; i < items.length; i++) {
    let value = items[i][key];
    values.push(value);
  }
  return values;
};


class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    let result = "Employee: " + this.name + ", Base Salary: " + this.baseSalary;
    return result;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    let info = "Manager of " + this.department + ": " + this.name;
    return info;
  }
}


const validateAgeAsync = async (age: number): Promise<string> => {
  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  }

  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Access Granted");
    }, 1000);
  });
};