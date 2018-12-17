package rftbackend.Config;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class DatabaseConfig {

    @Bean
    public DataSource dataSource() {

        String dbUrl = "jdbc:mysql://localhost:3306/sulimuri?useSSL=false"; //database

        return DataSourceBuilder
                .create()
                .url(dbUrl)
                .username("root") //ezeket átírni
                .password("kisjelszo")
                .driverClassName("com.mysql.jdbc.Driver")
                .build();
    }
}
