
export function GetUsers(): string[] {
    return ['admin', 'secretarie', 'alumn'];
}

export function AddUser( user: string ): string[] {
    let users: string[] = ['admin', 'secretarie', 'alumn'];
    users.push(user);
    return users;
}

export function DeleteUser( user: string ): string[] {
    let users: string[] = ['admin', 'secretarie', 'alumn'];
    // Eliminar el elemento del array
    const index = users.indexOf(user);
    if (index !== -1) {
        users.splice(index, 1);
    }
    
    return users;
}