package BNTA;

public class Main {
    public static void main(String[] args) {
        int randNumGen = (int)Math.floor(Math.random() * 25);
        String[] names = {"Will", "Aoife", "Abdi", "Alimaa", "Suraya", "Hajr", "Suad", "Aaron", "Adib", "Robyn", "Jake", "Andrew", "Marcy", "Alex", "Cristian", "Zhengyang", "Darshil", "Rachel", "Sarina", "Nayan", "Michael", "Michelle", "Connie", "Shirhan", "Rosalinda", "Suraaj",};
        System.out.println("The lucky winner is "  + names[randNumGen] + "!");
    }
}
