package com.software.softwaresys.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Program {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_prog;
    private int idCategory;
    private int idDeveloper;
    private String prog_name;
    private String prog_desc;
    private String prog_link;

    public Program(){

    }

    public int getId_prog() {
        return id_prog;
    }

    public void setId_prog(int id_prog) {
        this.id_prog = id_prog;
    }

    public int getIdCategory() {
        return idCategory;
    }

    public void setIdCategory(int idCategory) {
        this.idCategory = idCategory;
    }

    public int getIdDeveloper() {
        return idDeveloper;
    }

    public void setIdDeveloper(int idDeveloper) {
        this.idDeveloper = idDeveloper;
    }

    public String getProg_name() {
        return prog_name;
    }

    public void setProg_name(String prog_name) {
        this.prog_name = prog_name;
    }

    public String getProg_desc() {
        return prog_desc;
    }

    public void setProg_desc(String prog_desc) {
        this.prog_desc = prog_desc;
    }

    public String getProg_link() {
        return prog_link;
    }

    public void setProg_link(String prog_link) {
        this.prog_link = prog_link;
    }
}
