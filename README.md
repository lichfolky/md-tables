# md-tables

Convert an array of objects in a markdown table or parse a markdown table to an array of objects.

example:

```
| Id  | Name                  | Grades |
| --- | --------------------- | ------ |
| 213 | Marco della Rovere    | 78     |
| 110 | Paola Cortellessa     | 96     |
| 250 | Andrea Mantegna       | 48     |
| 145 | Gaia Borromini        | 74     |
| 196 | Luigi Grimaldello     | 68     |
| 102 | Piero della Francesca | 50     |
| 120 | Francesca da Polenta  | 84     |
```
becomes:
``` 
[{Id: '110', Name: 'Paola Cortellessa', Grades: '96'}, 
{Id: '250', Name: 'Andrea Mantegna', Grades: '48'}, 
{Id: '145', Name: 'Gaia Borromini', Grades: '74'}, 
{Id: '196', Name: 'Luigi Grimaldello', Grades: '68'}, 
{Id: '102', Name: 'Piero della Francesca', Grades: '50'}, 
{Id: '120', Name: 'Francesca da Polenta', Grades: '84'}]
```
and vice versa