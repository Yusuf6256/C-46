var boy, idleBoy, runningBoy, idleBoyLeft, boyjumps
var groundImg,ground,ground2
var count = 0

function preload()
{
    groundImg=loadImage('Images/Ground/Ground.png')

    idleBoy=loadAnimation("images/Playing Character/Standing1.png","images/Playing Character/Standing2.png"
    ,"images/Playing Character/Standing3.png","images/Playing Character/Standing4.png")

    runningBoy=loadAnimation("images/Playing Character/Running1.png","images/Playing Character/Running2.png"
    ,"images/Playing Character/Running3.png","images/Playing Character/Running5.png","images/Playing Character/Running4.png"
    ,"images/Playing Character/Running6.png")

    idleBoyLeft = loadAnimation("images/Playing Character/Standingleft.png")

    boyjumps = loadAnimation("images/Playing Character/Jump1.png","images/Playing Character/Jump2.png","images/Playing Character/Jump3.png")
}

function setup()
{
    createCanvas(displayWidth-20,displayHeight-30)

    boy = createSprite(displayWidth/2,displayHeight/3,10,10)
    boy.shapeColor = 'red'
    boy.addAnimation("standing",idleBoy)

    boy.addAnimation("jumping",boyjumps)

    boy.addAnimation("left",idleBoyLeft)

    boy.addAnimation("running",runningBoy)

    camera.x = boy.x
    camera.y = boy.y

    ground = createSprite(displayWidth/2.2,displayHeight/1.1,10000000000,10)
    ground.shapeColor = 'brown'
    ground.addImage(groundImg,"Ground")
    ground.scale = 5
    groundImg.height = groundImg.height/3

    ground2 = createSprite(displayWidth/2.2,displayHeight/1.1,10000000000,10)
    ground2.shapeColor = 'brown'
    ground2.addImage(groundImg,"Ground")
    ground2.scale = 5
    groundImg.height = groundImg.height/1
    

    
}

function draw()
{
    background('blue')
    boy.velocityY = boy.velocityY+0.3

    camera.x = boy.x
    camera.y = displayHeight-30

    if(boy.isTouching(ground))
    {
        boy.velocityY = 0
        count = 0
        boy.changeAnimation("standing",idleBoy)
    }

        if(keyDown(RIGHT_ARROW))
    {
        boy.x = boy.x + 5
        boy.changeAnimation("running",runningBoy)
    }
        if(keyWentUp(RIGHT_ARROW))
        {
            boy.changeAnimation("standing",idleBoy)
        }

    if(keyDown(LEFT_ARROW))
    {
        boy.x = boy.x - 5
        boy.changeAnimation("left",idleBoyLeft)
    }

    if (keyDown(UP_ARROW))
    {
        boy.velocityY = -7
        count = count + 1
        boy.changeAnimation("jumping",boyjumps)
    }
    


    drawSprites()
}

function keyPressed()
{


    

    if(count >= 3)
    {
       boy.velocityY = 0
    }
    console.log(count)

}