db = db.getSiblingDB('task');

db.createUser({
    user: 'usuario',
    pwd: 'usuario',
    roles: [
        { role: 'dbAdmin', db: 'task' },
        { role: 'readWrite', db: 'task' }
    ],
});

