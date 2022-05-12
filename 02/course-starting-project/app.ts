enum Role {
    ADMIN = 5,
    READ_ONLY = 100,
    AUTHOR,
    USER = 'USER',
}

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
    role2: Role;
} = {
    name: 'HJ',
    age: 25,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
    role2: Role.ADMIN,
};

// person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Cooking'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
