Database diagram consisting of four tables: People, Levels, Classes and Enrollments.

The People table is made up of the columns:
ID: integer type data,
name: string type data,
ativo: Boolean type data,
email: string type data,
role: string type data.

The Levels table is made up of the columns:
ID: integer type data,
descr_level: string type data.

The Classes table is made up of the columns:
ID: integer type data,
docente_id: data type ID/integer,
start_date: data type dateonly,
level_id: data type ID/integer.

The Enrollments table is made up of the columns:
ID: integer type data,
status: string type data,
student_id: data type ID/integer,
class_id: data type ID/integer.
