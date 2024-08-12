<!DOCTYPE html>
<html lang="en">
    <?php include 'src/header.php'; ?>

    <body>
        <!------ Header ------>
        <?php include 'src/navbar.php'; ?>

        <?php 
        // Get the page from the URL, default to 'home' if not set -->
        $page = isset($_GET['page']) ? $_GET['page'] : 'home';  
        
        // Determine which content to include based on the 'page' parameter
        switch ($page) {
            case 'home':
                include 'src/home.php';
                break;
            case 'menu':
                include 'src/menu.php';
                break;
            case 'contact':
                include 'src/contact.php';
                break;
            default:
                include 'src/home.php'; // Fallback to home if page not found
                break;
            }
        ?>
        <!------ Showcase start ------>
        
        <!-- JavaScript -->
        <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
        <script src="js/script.js"></script>

        <!-- Footer  -->
        <?php include 'src/footer.php'; ?>
    </body>
</html>