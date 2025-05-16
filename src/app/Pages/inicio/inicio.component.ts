
import { Component, inject, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { EmpleadoService} from '../../Services/empleado.service';
import { Router } from '@angular/router';
import { Empleado } from '../../Models/Empleado';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  private employeeService = inject(EmpleadoService);
  public listEmployees: Empleado[] = [];
  displayedColumns: string[] = ['NombreCompleto', 'Correo', 'Sueldo', 'FechaContrato', 'Acciones'];

constructor(private router:Router) {}

ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.lista().subscribe({
      next: (data) => {
        if (data.length === 0) {
          console.log('No hay empleados disponibles.');
        }
        this.listEmployees = data;
      },
      error: (error) => {
        console.log('Error al obtener la lista de empleados:', error);
      }
    });
  }


  newEmployee() {
    this.router.navigate(['/Empleado',0]);
  }

  editEmployee(objeto:Empleado) {
    this.router.navigate(['/Empleado', objeto.idEmpleado]);
  }

  deleteEmployee(objeto: Empleado) {
      if (confirm("¿Está seguro de que desea eliminar este empleado?"+ objeto.nombreCompleto)) {
        this.employeeService.eliminar(objeto.idEmpleado).subscribe({
            next: (data) => {
            if (data.isSuccess) {
            console.log('Empleado eliminado:', data);
            this.getEmployees();
            }else {
              alert("no se pudo eliminar el empleado");
            }
          },
          error: (error) => {
            console.log('Error al eliminar el empleado:', error);
          }
        });
      }
  }
}
