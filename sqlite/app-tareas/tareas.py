import sqlite3

conn = sqlite3.connect("tareas.db")
c = conn.cursor()
def create_table () :
    with open("initdb.sql", "r") as f:
        c.executescript(f.read())
    conn.commit()

def add_task(title, status = "pending", description = None):
    c.execute("INSERT INTO tasks (tittle, description) VALUES (?, ?)", (title, description))
    conn.commit()

def get_task():
    c.execute('SELECT * FROM tasks')
    return c.fetchall()

def complete_task(task_id):
    c.execute('UPDATE tsks SET status = "completed" WHERE id = ?', (task_id,))
    conn.commit()

def complete_tasks_by_tittle(tittle):
    c.execute('UPDATE tasks SET status = "completed" WHERE id = ?', (task_id,))
    conn.commit()

def delete_task(task_id):
    c.execute('DELETE FROM tasks WHERE id= ?', (task_id))
    conn.commit

create_table()
add_task("tarea test", "desc test",)
resultado = get_task()
print(resultado)

while True:
    print('1. Add task')
    print('2. List tasks')
    print('3. Complete task')
    print('4. Complete tasks')

    option = input('Choose an option: ')

    if option == '1':
        task = input('Enter the task: ')
        desc = input('Enter the description: (optional)')
        add_task(task, desc)

    elif option == '2':
        tasks = get_task()
        print('ID| Task| Description|Status')
        for task in tasks:
            line = f'{task[0]} | {task[1]} | {task[2]} | {task[3]}'

    elif option =='3':
        task_id = input('Enter the task id: ')
        complete_task(task_id)

    elif option =='4':
        task_id = input('Enter the task id: ')
        delete_task(task_id)


