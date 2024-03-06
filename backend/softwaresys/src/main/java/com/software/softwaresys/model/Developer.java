package com.software.softwaresys.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Developer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_dev;
    private String Developer_Name;

    public Developer(){

    }

    public int getId_dev() {
        return id_dev;
    }

    public void setId_dev(int id_dev) {
        this.id_dev = id_dev;
    }

    public String getDeveloper_Name() {
        return Developer_Name;
    }

    public void setDeveloper_Name(String developer_Name) {
        Developer_Name = developer_Name;
    }
}
